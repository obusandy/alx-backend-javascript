/**
 * Each interface defines a number named credits
 */
export interface MajorCredits {
  credits: number & { __brand: "MajorCredits.credits" };
}

export interface MinorCredits {
  credits: number & { __brand: "MinorCredits.credits" };
}
/**
 *
 * @param subject1 - returns MajorCredits value
 * @param subject2 - sumMinorCredits returns MinorCredits value
 * @returns - Each function sums the credits of the two subjects
 */
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return { credits: subject1.credits + subject2.credits } as MajorCredits;
}

// sums of the two credits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return { credits: subject1.credits + subject2.credits } as MinorCredits;
}
