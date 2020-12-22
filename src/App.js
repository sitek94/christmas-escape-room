import * as React from 'react';
import { Box, Button, TextField, Typography } from '@material-ui/core';
import Layout from './layout';
import Stepper from './stepper';
import sherlock from './images/sherlock.jpg';
import FinishedScreen from './finished-screen';

const create = (label, content) => ({ label, content });

const steps = [
  create('q1', <Start />),
  create('q2', <Rozgrzewka />),
  create('q3', <SzukanieSfinksa />),
  create('q4', <Sherlock />),
];

const AppContext = React.createContext();
function useComplete() {
  const complete = React.useContext(AppContext);
  return complete;
}

function App() {
  const [completed, setCompleted] = React.useState(0);
  const complete = () => setCompleted((prev) => prev + 1);

  const finished = completed === steps.length;

  return (
    <AppContext.Provider value={complete}>
      <Layout>
        {finished ? (
          <FinishedScreen />
        ) : (
          <Stepper steps={steps} completed={completed} />
        )}
      </Layout>
    </AppContext.Provider>
  );
}

/**
 * START
 */
function Start() {
  const complete = useComplete();

  const [isCompleted, setIsCompleted] = React.useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    if (isCompleted) return;

    setIsCompleted(true);
    complete();
  };

  return (
    <div>
      <h2>Start</h2>
      <Box sx={{ mb: 2 }}>
        <Typography>
          Wykonaj wszystkie zadania, żeby odblokować kompromitujące nasz rząd materiały.
        </Typography>
      </Box>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
        onSubmit={onSubmit}
      >
        <Button disabled={isCompleted} variant="contained" type="submit">
          Zaczynajmy!
        </Button>
      </Box>
    </div>
  );
}

/**
 * ROZGRZEWKA - ARKA NOEGO
 */
function Rozgrzewka() {
  const complete = useComplete();

  const [isCompleted, setIsCompleted] = React.useState(false);
  const [value, setValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    if (isCompleted) return;
    if (value === '0') {
      setIsCompleted(true);
      complete();
    } else {
      setValue('NIE!');
    }
  };

  return (
    <div>
      <h2>Rozgrzewka</h2>
      <Box sx={{ mb: 2 }}>
        <Typography>
          Na początek coś łatwego. Ile zwierząt zabrał Mojżesz na Arkę? (Podaj
          liczbę)
        </Typography>
      </Box>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
        onSubmit={onSubmit}
      >
        {isCompleted ? (
          <Typography>
            Brawo bystrzaki! Teraz czas na coś poważniejszego, a mianowicie na
            poszukiwania. Do boju!
          </Typography>
        ) : (
          <>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                value={value}
                onChange={(e) => setValue(e.target.value.toString())}
              />
            </Box>
            <Button variant="contained" type="submit">
              Sprawdź
            </Button>
          </>
        )}
      </Box>
    </div>
  );
}

/**
 * SZUKANIE SFINKSA
 */
function SzukanieSfinksa() {
  const complete = useComplete();

  const [isCompleted, setIsCompleted] = React.useState(false);
  const [value, setValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    if (isCompleted) return;
    if (value === 'keiwolzc') {
      setIsCompleted(true);
      complete();
    } else {
      setValue('NIE!');
    }
  };

  return (
    <div>
      <h2>Poszukiwania</h2>
      <Box sx={{ mb: 2 }}>
        <Typography>
          Niczym Edyp, musicie rozwiązać zagadkę, ale najpierw musicie odnaleźć
          u nas w domu tego kto zadał ją Edypowi.
          <br />
          <br />
          Rozwiązanie zagadki:
        </Typography>
      </Box>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
        onSubmit={onSubmit}
      >
        {isCompleted ? (
          <Typography>Brawo! Możecie kontynuować.</Typography>
        ) : (
          <>
            <Box sx={{ mb: 2 }}>
              <TextField
                fullWidth
                value={value}
                onChange={(e) => setValue(e.target.value.toString())}
              />
            </Box>
            <Button variant="contained" type="submit">
              Sprawdź
            </Button>
          </>
        )}
      </Box>
    </div>
  );
}

/**
 * SZUKANIE SFINKSA
 */
function Sherlock() {
  const complete = useComplete();

  const [isCompleted, setIsCompleted] = React.useState(false);
  const [value, setValue] = React.useState('');

  const onSubmit = (event) => {
    event.preventDefault();

    if (isCompleted) return;
    if (value === 'catlover') {
      setIsCompleted(true);
      complete();
    } else {
      setValue('NIE!');
    }
  };

  return (
    <div>
      <h2>Poszukiwania</h2>
      <Box sx={{ mb: 2 }}>
        <Typography>
          Możecie nie wiedzieć, kim jest ten pan po prawej, więc jako wskazówka
          jest pan po lewej. Znajdziecie go u nas w domu? Idźcie jego tropem a
          znajdziecie tajny szyfr.
        </Typography>
      </Box>
      <Box sx={{ mb: 2, textAlign: 'center' }}>
        <img
          width="300"
          src={sherlock}
          alt="On the left Benedict Cumberbatch and the right Sir Arthur Conan Doyle"
        />
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography>Tajny szyfr:</Typography>
      </Box>
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
        }}
        onSubmit={onSubmit}
      >
        <Box sx={{ mb: 2 }}>
          <TextField
            fullWidth
            value={value}
            onChange={(e) => setValue(e.target.value.toString())}
          />
        </Box>
        <Button variant="contained" type="submit">
          Sprawdź
        </Button>
      </Box>
    </div>
  );
}

export default App;
