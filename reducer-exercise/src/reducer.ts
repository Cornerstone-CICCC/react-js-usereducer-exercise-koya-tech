// reducer.ts
// Reducer state and actions for dark mode and font size

export type State = {
  isDark: boolean;
  fSize: number;
};

export type Action =
  | { type: 'TOGGLE_DARK' }
  | { type: 'INCREASE_FONT' }
  | { type: 'DECREASE_FONT' };

export const initialState: State = {
  isDark: false,
  fSize: 16,
};

export function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'TOGGLE_DARK':
      return { ...state, isDark: !state.isDark };
    case 'INCREASE_FONT':
      return { ...state, fSize: state.fSize + 1 };
    case 'DECREASE_FONT':
      return { ...state, fSize: state.fSize - 1 };
    default:
      return state;
  }
}
