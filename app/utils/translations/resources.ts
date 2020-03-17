import * as WelcomeScreenNotification from "../../screen/WelcomeScreenNotification/translations";
import * as WelcomeScreenIntro from "../../screen/WelcomeScreenIntro/translations";
import * as WelcomeScreen from "../../screen/WelcomeScreen/translations";
import * as DashboardScreen from "../../screen/DashboardScreen/translations";

const it = {
  ...WelcomeScreenNotification.it,
  ...WelcomeScreenIntro.it,
  ...WelcomeScreen.it,
  ...DashboardScreen.it
};
const en = {
  ...WelcomeScreenNotification.en,
  ...WelcomeScreenIntro.en,
  ...WelcomeScreen.en,
  ...DashboardScreen.en
};

export interface TranslationKeys
  extends WelcomeScreenNotification.TranslationKeys,
  WelcomeScreenIntro.TranslationKeys,
  WelcomeScreen.TranslationKeys,
  DashboardScreen.TranslationKeys {}

export { it, en };