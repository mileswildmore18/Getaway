import {type RouteConfig, index, route} from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("Dreamhouse", "routes/dreamhouse.tsx"),
    //route("DreamhouseId", "routes/id/DreamHouseId.$id.tsx")
] satisfies RouteConfig;
