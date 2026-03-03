import { simvarSet } from "@/API/simvarApi"

export async function setLandingLights(position: number) {
  try {
    const expression = `${position} (>L:INI_LIGHTS_LANDING)`
    await simvarSet(expression)

    console.log("Set landing lights (LVAR):", expression)
  } catch (error) {
    console.error("Error setting landing lights:", error)
  }
}
