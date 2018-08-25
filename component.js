let Component = {
 Login: resolve => require(["@/views/account/login"], resolve),
 Register: resolve => require(["@/views/account/register"], resolve),
 NotFound: resolve => require(["@/views/error/404"], resolve),
 NotAuth: resolve => require(["@/views/error/401"], resolve),
 Home: resolve => require(["@/views/layout/home"], resolve)};
export default Component;
