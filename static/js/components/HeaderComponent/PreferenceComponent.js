import { h, Fragment } from "../../@ui/ui-lib";

export default function PreferenceComponent({
  preferences,
  setPreferences,
  removeMenu
}) {
  return h(
    Fragment,
    null,
    h("div", { class: "mask", onClick: removeMenu }),
    h(
      "div",
      { id: "preference-component" },
      h(
        Fragment,
        null,
        h("div", null, "Preferences"),
        h(
          "button",
          {
            class: "toggle-option",
            onClick: () => setPreferences("darkMode", !preferences.darkMode)
          },
          "Dark Mode is ",
          preferences.darkMode ? "On" : "Off"
        )
      )
    )
  );
}
