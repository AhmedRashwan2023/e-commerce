import { useLocale } from "next-intl";
import { redirect } from "next/navigation";

const AccountPage = () => {
  const activeLocale = useLocale();
  redirect(`/${activeLocale}`);
  return null;
};

export default AccountPage;
