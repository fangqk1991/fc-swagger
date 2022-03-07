import { Api } from './index'

export const HealthApis = {
  Ping: {
    method: 'GET',
    route: `/api/health/ping`,
    description: '测试连通性',
    skipAuth: true,
  } as Api,
  PingHealth: {
    method: 'GET',
    route: `/api/health/ping-health`,
    description: '检查测试(自定义)',
    skipAuth: true,
  } as Api,
  PingPrint: {
    method: 'GET',
    route: `/api/health/ping-print`,
    description: '打印请求信息',
    skipAuth: true,
  } as Api,
  PingAuth: {
    method: 'GET',
    route: `/api/health/ping-auth`,
    description: '测试连通性(需要鉴权)',
  } as Api,
  PingQuery: {
    method: 'GET',
    route: `/api/health/ping/query`,
    description: '测试 Query 参数',
    skipAuth: true,
  } as Api,
  PingFullData: {
    method: 'POST',
    route: `/api/health/ping/body`,
    description: '测试 Body 参数',
    parameters: [
      {
        name: 'bodyData',
        type: 'object',
        in: 'body',
        description: '',
      },
    ],
  } as Api,
  PingError: {
    method: 'POST',
    route: `/api/health/ping/error`,
    description: '测试错误触发',
    skipAuth: true,
  } as Api,
  SystemInfoGet: {
    method: 'GET',
    route: `/api/health/system-info`,
    description: '系统信息获取',
  } as Api,
  AppPermissionInfoGet: {
    method: 'GET',
    route: `/api/health/app-permission-info`,
    description: '应用权限信息获取',
  } as Api,
  AppPermissionInfoReload: {
    method: 'POST',
    route: `/api/health/app-permission-info`,
    description: '应用权限信息重新加载',
  } as Api,
  AppConfigInfoGet: {
    method: 'GET',
    route: `/api/health/app-config-info`,
    description: '应用配置信息获取',
  } as Api,
}
