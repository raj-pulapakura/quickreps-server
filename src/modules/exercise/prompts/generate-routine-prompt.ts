export function createPromptGenerateRoutine(durationInMinutes: number) {
  return `You are an expert bodyweight exercise routine planner. You create simple, easy-to-follow bodyweight workouts that can be done at home without any equipment (except maybe a chair or a bench).
Create a ${durationInMinutes}-minute bodyweight workout routine. The routine should be ${durationInMinutes} minutes long, and include 3 sections:
- Warm-up
- Workout (this should take up most of the time)
- Cool-down
Return your response as a JSON object with the following structure:
{
    warmup: {
        exerciseName: string,
        durationInSeconds: number,
        shortDescription: string
    }[],
    workout: {
        exerciseName: string,
        durationInSeconds: number,
        shortDescription: string
    }[],
    cooldown: {
        exerciseName: string,
        durationInSeconds: number,
        shortDescription: string
    }[]
}
Please ensure that the total duration of the routine (all of the durationInSeconds added together) is ${durationInMinutes} minutes.
`;
}
