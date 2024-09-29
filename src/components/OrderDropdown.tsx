import theme from "@/styles/theme";
import React, { FC, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Typography } from "./Typography";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useTheme } from "@/contexts/ThemeContext";

export enum OrderOption {
  ALP_ASC = "A_ASC",
  ALP_DESC = "A_DESC",
  DATE_ASC = "D_ASC",
  DATE_DESC = "D_DESC",
}

type OrderDropdownProps = {
  value?: OrderOption;
  onChange: (value: OrderOption) => void;
};

export const OrderDropdown: FC<OrderDropdownProps> = ({ value, onChange }) => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={[styles.createButton]} onPress={() => setOpen(!open)}>
        <FontAwesome name="filter" size={18} color="white" />
      </TouchableOpacity>

      {open && (
        <View style={[styles.options, { backgroundColor: theme.default.primary }]}>
          {options.map((option) => {
            const isSelected = option.value === value;
            return (
              <TouchableOpacity
                key={option.value}
                style={styles.option}
                onPress={() => {
                  setOpen(!open);
                  onChange(option.value);
                }}
              >
                <Typography style={(styles.option, isSelected && { color: theme.colors.action })}>
                  {option.label}
                </Typography>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

const options = [
  { label: "A-Z", value: OrderOption.ALP_ASC },
  { label: "Z-A", value: OrderOption.ALP_DESC },
  { label: "Newest", value: OrderOption.DATE_DESC },
  { label: "Oldest", value: OrderOption.DATE_ASC },
];

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  createButton: {
    backgroundColor: theme.colors.action,
    borderRadius: 100,
    width: 36,
    height: 36,
    justifyContent: "center",
    alignItems: "center",
  },
  options: {
    position: "absolute",
    zIndex: 10,
    top: 46,
    right: 0,
    borderRadius: 10,
    shadowColor: "#00000030",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
    padding: 10,
    width: 80,
    gap: 8,
  },
  option: {},
});
