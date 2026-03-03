import { invoke } from "@tauri-apps/api/core"

export async function simvarSet(variableString: string): Promise<void> {
  return invoke<void>("simvar_set", { variableString })
}

export async function simvarGet(variableString: string): Promise<number | null> {
  return invoke<number | null>("simvar_get", { variableString })
}

export async function getAircraftTitle(): Promise<string | null> {
  return invoke<string | null>("get_aircraft_title")
}
