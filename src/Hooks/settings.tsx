import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { usePersistentState } from '../Utils/usePersistentState';

interface Setting {
  name: string;
  value: string;
}

interface SettingsContextData {
  loadingSettings: boolean;
  settings: Setting[];
}

interface SettingsProviderProps {
  children: React.ReactNode;
}

// Simulando uma API
function getSettingsFromServer(): Setting[] {
  return [
    {
      name: 'enableDashboard',
      value: 'true',
    },
  ];
}

const SettingsContext = createContext<SettingsContextData>(
  {} as SettingsContextData
);

const settingsKey = '@Turma736:Settings';
const settingsExpirationKey = '@Turma736:SettingsExpiration';

function getExpiration() {
  const dateNow = new Date();
  dateNow.setMinutes(dateNow.getMinutes() + 1);
  return dateNow;
}

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [settings, setSettings] = usePersistentState<Setting[]>(
    settingsKey,
    []
  );

  const [expires, setExpires] = usePersistentState<Date>(
    settingsExpirationKey,
    getExpiration()
  );

  const settingsIsValid = expires > new Date();
  const [loadingSettings, setLoadingSettings] = useState(
    settings.length === 0 || settingsIsValid
  );

  useEffect(() => {
    function loadSettings() {
      // Chamada à API
      setTimeout(() => {
        const settingsFromServer = getSettingsFromServer();
        setSettings(settingsFromServer);
        localStorage.setItem(settingsKey, JSON.stringify(settingsFromServer));

        const newExpiration = getExpiration();
        setExpires(newExpiration);
        localStorage.setItem(
          settingsExpirationKey,
          JSON.stringify(newExpiration)
        );

        setLoadingSettings(false);
      }, 5000);
    }

    if (settings.length === 0 || !settingsIsValid) {
      loadSettings();
    }
  }, []);

  const settingsData = useMemo(
    () => ({
      loadingSettings,
      settings,
    }),
    [loadingSettings, settings]
  );

  return (
    <SettingsContext.Provider value={settingsData}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings(): SettingsContextData {
  const context = useContext(SettingsContext);
  return context;
}