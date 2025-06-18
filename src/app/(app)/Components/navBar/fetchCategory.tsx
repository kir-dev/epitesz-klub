import { getPayload } from "payload";
import config from "@payload-config";
import NavBar, { NavItem } from "./navBar";

export default async function fetchNavItems(homePage: boolean = false) {
  const payload = await getPayload({ config });
  const categories = await payload.find({
    collection: "categories",
  });

  const categoryItems: NavItem[] = categories.docs.map((category) => ({
    title: category.name,
    href: `/projektek/${category.id}`,
  }));

  return <NavBar categories={categoryItems} homePage={homePage} />;
}
