import { useState, useEffect } from "react";
import * as Location from "expo-location";

export default function useGeolocation() {
  const [coords, setCoords] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setError("Permission to access location was denied");
          return;
        }
        const { coords } = await Location.getCurrentPositionAsync();
        setCoords(coords);
      } catch (e) {
        setError(e.message);
      }
    })();
  }, []);

  return { coords, error };
}
