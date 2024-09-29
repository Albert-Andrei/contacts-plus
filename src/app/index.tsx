import { StatusBar, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import theme from "@/styles/theme";
import { useTheme } from "@/contexts/ThemeContext";
import { FlashList, FlashListProps } from "@shopify/flash-list";
import { router } from "expo-router";
import { Contact } from "@/types/contact.types";
import { useAppSelector } from "@/store/store";
import { ContactItem } from "@/components/ContactItem";
import { useState } from "react";
import { EmptyList } from "@/components/EmptyList";
import { OrderDropdown, OrderOption } from "@/components/OrderDropdown";
import { Typography } from "@/components/Typography";

export default function HomeScreen() {
  const { theme } = useTheme();
  const { contacts } = useAppSelector((state) => state.contacts);
  const insets = useSafeAreaInsets();

  const [search, setSearch] = useState("");
  const [order, setOrder] = useState(OrderOption.DATE_ASC);

  const modifiedContacts = getModifiedContacts(contacts, search, order);

  const containerBg =
    modifiedContacts.length === 0 ? theme.default.background : theme.default.primary;

  function createContact() {
    router.navigate("/create-contact");
  }

  function listEmptyComponent() {
    return search ? (
      <EmptyList
        title="Oh no 😱"
        description="We could not find a contact that would match your search."
      />
    ) : (
      <EmptyList onPress={createContact} />
    );
  }

  const renderContact: FlashListProps<Contact>["renderItem"] = ({ item }) => {
    return <ContactItem contact={item} onPress={() => router.navigate(`/contact/${item.id}`)} />;
  };

  return (
    <>
      <StatusBar barStyle="dark-content" animated />

      <View
        style={{
          paddingTop: insets.top + 10,
          zIndex: 10,
          backgroundColor: theme.default.background,
        }}
      >
        <View style={styles.searchContainer}>
          <View style={styles.searchInputContainer}>
            <View style={styles.searchIcon}>
              <Feather name="search" size={22} color={theme.colors.zinc} />
            </View>

            <TextInput
              value={search}
              onChangeText={(val) => setSearch(val)}
              numberOfLines={1}
              keyboardType="default"
              autoCapitalize="none"
              placeholder="Search"
              placeholderTextColor={theme.colors.zinc}
              style={[
                styles.searchInput,
                { backgroundColor: theme.default.primary, color: theme.default.text },
              ]}
              clearButtonMode="while-editing"
            />
          </View>

          <OrderDropdown value={order} onChange={(opt) => setOrder(opt)} />

          <TouchableOpacity style={styles.createButton} onPress={createContact}>
            <AntDesign name="plus" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ flex: 1, backgroundColor: containerBg }}>
        <FlashList<Contact>
          data={modifiedContacts}
          showsVerticalScrollIndicator={false}
          renderItem={renderContact}
          keyExtractor={(item) => item?.id}
          contentContainerStyle={{
            backgroundColor: containerBg,
            paddingHorizontal: theme.spacings.lg,
          }}
          ListEmptyComponent={listEmptyComponent}
          estimatedItemSize={64}
          scrollEventThrottle={16}
        />
      </View>
    </>
  );
}

function getModifiedContacts(contacts: Contact[], search: string, order: OrderOption) {
  const sortedContacts = contacts.sort((a, b) => {
    switch (order) {
      case OrderOption.ALP_ASC:
        return a.name.localeCompare(b.name);
      case OrderOption.ALP_DESC:
        return b.name.localeCompare(a.name);
      case OrderOption.DATE_ASC:
        return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
      case OrderOption.DATE_DESC:
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      default:
        return 0;
    }
  });

  if (search) {
    return sortedContacts?.filter((contact) => {
      return contact?.name?.toLowerCase().includes(search.toLowerCase());
    });
  }

  return sortedContacts;
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: theme.spacings.lg,
    gap: theme.spacings.sm,
    marginTop: theme.spacings.md,
    marginBottom: theme.spacings.lg,
  },
  searchInputContainer: {
    flex: 1,
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    zIndex: 1,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
    left: theme.spacings.xs,
  },
  searchInput: {
    flex: 1,
    height: 36,
    borderRadius: 100,
    paddingHorizontal: theme.spacings.md,
    paddingLeft: 40,
    fontSize: theme.fontSizes.sm,
    fontFamily: theme.fontFamily.regular,
  },
  createButton: {
    backgroundColor: theme.colors.action,
    borderRadius: 100,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
});
