import remoteConfig  from "@react-native-firebase/remote-config";

async function syncConfiguration(): Promise<any> {
  try {
    const config = remoteConfig();
    await config.setConfigSettings({
      minimumFetchIntervalMillis: parseInt('0', 10),
    });
    const fetchedRemotely = await config.fetchAndActivate();
    return fetchedRemotely;
  } catch (error) {
    console.error('[syncConfiguration] error:', error);
  }
}

async function utilityRetriveConfiguration() {
  try {
    await syncConfiguration();
    const ID = remoteConfig().getValue('ID').asNumber();
    return {
      id: ID,
    }
  } catch (error) {
    console.error('[utilityRetriveConfiguration] error:', error);
    throw new Error(error as string | undefined);
  }
}

export { syncConfiguration, utilityRetriveConfiguration };