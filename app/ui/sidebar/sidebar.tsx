import { SidenavBase } from "./sidenav-base";
import StudentNavLinks from "./student-navbar";

export default async function SideNav() {
  return (
    <SidenavBase>
      <StudentNavLinks />
    </SidenavBase>
  );
}
