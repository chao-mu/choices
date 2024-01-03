// Ours - Routes - Pages
import Landing from "./Landing";

// Ours - Components
import { FallbackForRouter } from "@/common/components";

// Ours - Routes
import Root from "./Root";

export default [
  {
    path: "/",
    element: <Root />,
    errorElement: <FallbackForRouter />,
    id: "root",
    children: [
      {
        index: true,
        element: <Landing />,
      },
    ],
  },
];
