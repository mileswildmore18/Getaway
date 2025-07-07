import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("dreamhouse", "routes/dreamhouse.tsx", [
        route("group/:groupId", "routes/group/DreamhouseGroup.tsx"),
        route(":id", "routes/id/DreamHouseId.tsx"),
    ]),
] satisfies RouteConfig;
