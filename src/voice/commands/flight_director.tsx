import { simvarSet } from "@/API/simvarApi"

export async function setFlightDirector(position: number) {
  try {
    const expression = `${position} (>L:INI_FD_ON)`
    await simvarSet(expression)
  } catch (error) {
    console.error("Error setting flight director:", error)
  }
}
export async function setBird(position: number){
  try {
    const expression = `${position} (>L:INI_FCU_HDG_VS_COMMAND)`
    await simvarSet(expression)
  } catch (error) {
    console.error("Error setting flight director and bird:", error)
  }
}
