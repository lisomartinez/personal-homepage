import theme from '../../../../theme';

export type LevelIndicator = {
  level: number;
  color: string;
};

const styles = theme.resume.progressBar.color;

class Level {
  private static styles = theme.resume.progressBar.color;
  private static levels = new Map<string, LevelIndicator>([
    ['Beginner', { level: 25, color: styles.beginner }],
    ['Basico', { level: 25, color: styles.beginner }],
    ['Intermediate', { level: 50, color: styles.intermediate }],
    ['Advance', { level: 75, color: styles.advanced }],
    ['Master', { level: 100, color: styles.master }],
    ['Upper-intermediate', { level: 100, color: styles.master }],
  ]);

  static getBarFor = (level: string): LevelIndicator => {
    const indicator = Level.levels.get(level);
    if (indicator == undefined) {
      return {
        level: 0,
        color: 'white',
      };
    }
    return indicator;
  };
}

export default Level;
