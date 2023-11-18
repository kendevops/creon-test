import NavButton from "../atoms/NavButton";

export default function NavList() {
    const menuItems = [
  {
    name: "Creon Pass",
    comingSoon: false,
  },
  {
    name: "Token",
    comingSoon: true,
  },
  {
    name: "AI Revenue",
    comingSoon: true,
  },
  {
    name: "AI Launchpad",
    comingSoon: true,
  },
];
    return (
      <>
        {menuItems.map((item) => {
          return (
            <NavButton
              key={item.name}
              title={item.name}
              commingSoon={item.comingSoon}
            />
          );
        })}
      </>
    );
}