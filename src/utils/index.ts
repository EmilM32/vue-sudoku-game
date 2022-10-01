import { LevelID } from '@/ts/enums'

/**
 * Check if selected level is defined in app config
 * @param level level to check
 * @returns level exist in app config
 */
export const isLevelCorrect = (level: LevelID | string) => {
  return Object.values(LevelID).includes(level as LevelID)
}
