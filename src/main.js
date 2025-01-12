import "./assets/main.css";
import "./assets/output.css";

import { createApp } from "vue";
import App from "./App.vue";

/* Import Font Awesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"; // untuk ikon regular

/* Import specific icons */
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

/* Add icons to the library */
library.add(faWhatsapp, faEnvelope, faPhone);

/* Create Vue App */
const app = createApp(App);

/* Register FontAwesomeIcon globally */
app.component("font-awesome-icon", FontAwesomeIcon);

/* Mount the App */
app.mount("#app");
