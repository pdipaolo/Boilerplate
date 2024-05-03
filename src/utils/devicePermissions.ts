import {
  PERMISSIONS,
  Permission,
  RESULTS,
  check,
  request,
  PermissionStatus,
} from 'react-native-permissions';


const MAXIMUM_ANDROID_API_VERSION_FOR_WRITE_EXTERNAL_STORAGE = 31;

async function utilityCheckPermission(
  permission: Permission,
): Promise<PermissionStatus> {
  try {
    const status = await check(permission);
    return status;
  } catch (error) {
    console.error('[utilityCheckPermission] error:', error);
    return RESULTS.DENIED;
  }
}

async function utilityRequestPermission(
  permission: Permission,
): Promise<PermissionStatus> {
  try {
    const result = await request(permission);
    return result;
  } catch (error) {
    console.error('[utilityRequestPermission] error:', error);
    return RESULTS.BLOCKED;
  }
}

async function utilityAskPermission(
  permission: Permission,
): Promise<PermissionStatus> {
  const status = await utilityCheckPermission(permission);

  if (status === RESULTS.DENIED) {
    const requestStatus = await utilityRequestPermission(permission);
    return requestStatus;
  }

  return status;
}

export {
  PERMISSIONS as DEVICE_PERMISSIONS,
  RESULTS as DEVICE_PERMISSIONS_RESULTS,
  MAXIMUM_ANDROID_API_VERSION_FOR_WRITE_EXTERNAL_STORAGE,
  utilityCheckPermission,
  utilityAskPermission,
};
