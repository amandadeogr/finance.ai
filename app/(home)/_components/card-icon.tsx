import {
  PiggyBankIcon,
  TrendingDownIcon,
  TrendingUpIcon,
  WalletIcon,
} from "lucide-react";

interface CardIconProps {
  type: string;
}
const CardIcon = ({ type }: CardIconProps) => {
  return type == "deposity" ? (
    <TrendingUpIcon
      size={36}
      className={`rounded-sm bg-success/10 p-2 text-success`}
    />
  ) : type == "investment" ? (
    <PiggyBankIcon
      size={36}
      className={`rounded-sm bg-secondary p-2 text-white`}
    />
  ) : type == "expense" ? (
    <TrendingDownIcon
      size={36}
      className={`rounded-sm bg-danger/10 p-2 text-danger`}
    />
  ) : (
    <WalletIcon
      size={36}
      className={`rounded-sm bg-background p-2 text-white`}
    />
  );
};

export default CardIcon;
