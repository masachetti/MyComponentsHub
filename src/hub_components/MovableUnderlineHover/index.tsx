import { HubComponent } from "@/types/componentHub";
import OnlyCss from "./OnlyCss";

export default {
  name: {
    PT: "Menu com sublinhado móvel",
    EN: "Menu with movable underline on hover",
  },
  description: {
    PT: "Menu com sublinhado móvel ao pairar o mouse sobre.",
    EN: "A menu component with a movable underline when hover.",
  },
  tags: ["only CSS", "menu"],
  preview: [
    {
      title: "Only CSS",
      previewComponent: <OnlyCss></OnlyCss>,
    },
  ],
  imageOrGifPath: "gifs/MovableUnderlineHoverMenu.gif",
} as HubComponent;
