import { rootRoute } from "./routes/__root"
import { Route as ContactRoute } from "./routes/contact"
import { Route as IndexRoute } from "./routes/index"
import { Route as ProductRoute } from "./routes/product"
import { Route as ProductDetailsRoute } from "./routes/product-details"

export const routeTree = rootRoute.addChildren([
  IndexRoute,
  ProductRoute,
  ProductDetailsRoute,
  ContactRoute,
])