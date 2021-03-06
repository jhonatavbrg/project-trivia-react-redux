export const SAVE_PLAYER = 'SAVE_PLAYER';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS';
export const GET_QUESTIONS_ERROR = 'GET_QUESTIONS_ERROR';
export const UPDATE_TIMER = 'UPDATE_TIMER';
export const RESET_TIMER = 'RESET_TIMER';
export const NEXT_QUESTION = 'NEXT_QUESTION';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const STOP_TIMER = 'STOP_TIMER';
export const RESET_QUESTIONS = 'RESET_QUESTIONS';
export const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export const UPDATE_DIFFICULTY = 'UPDATE_DIFFICULTY';
export const UPDATE_TYPE = 'UPDATE_TYPE';

export const savePlayer = (payload) => ({
  type: SAVE_PLAYER,
  payload,
});

export const getQuestions = () => ({
  type: GET_QUESTIONS,
});

export const getQuestionsSuccess = (payload) => ({
  type: GET_QUESTIONS_SUCCESS,
  payload,
});

export const getQuestionsError = (payload) => ({
  type: GET_QUESTIONS_ERROR,
  payload,
});

export const updateTimer = () => ({
  type: UPDATE_TIMER,
});

export const resetTimer = () => ({
  type: RESET_TIMER,
});

export const nextQuestion = () => ({
  type: NEXT_QUESTION,
});

export const updateScore = (payload) => ({
  type: UPDATE_SCORE,
  payload,
});

export const stopTimer = () => ({
  type: STOP_TIMER,
});

export const resetQuestions = () => ({
  type: RESET_QUESTIONS,
});

export const updateCategory = (payload) => ({
  type: UPDATE_CATEGORY,
  payload,
});

export const updateDifficulty = (payload) => ({
  type: UPDATE_DIFFICULTY,
  payload: payload === 'All' ? '' : payload,
});

export const updateType = (payload) => ({
  type: UPDATE_TYPE,
  payload: payload === 'All' ? '' : payload,
});

export const fetchQuestions = ({ token, category, difficulty, type }) => (dispatch) => {
  dispatch(getQuestions());
  const baseEndpoint = `https://opentdb.com/api.php?amount=5&token=${token}`;
  return fetch(
    `${baseEndpoint}&category=${category}&difficulty=${difficulty}&type=${type}`,
  )
    .then((response) => response.json())
    .then(
      (data) => {
        dispatch(getQuestionsSuccess(data.results));
      },
      (error) => dispatch(getQuestionsError(error)),
    );
};
