type FriendsInfo = {
  label: "Email" | "Address" | "Phone";
  subtitle?: string;
  navigationLabel?: HTMLAnchorElement;
};

export const friendsInfoCard: FriendsInfo[] = [
  { label: "Email" },
  { label: "Address" },
  { label: "Phone" },
];
