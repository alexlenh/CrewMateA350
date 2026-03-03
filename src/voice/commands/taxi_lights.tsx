import { simvarSet } from "@/API/simvarApi"

export async function setTaxiLights(position: number) {
  try {
    const expression = `${position} (>L:INI_LIGHTS_NOSE)`
    await simvarSet(expression)

    console.log("Set taxi lights (LVAR):", expression)
  } catch (error) {
    console.error("Error setting taxi lights:", error)
  }
}
