import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [item, setItem]  = useState('menu');
  const Week = {
    Lundi: {
      muscularGroup: 'Pecs / Triceps',
      exercice: {
        'Développé couché': '4x10',
        'Développé incliné': '4x10',
        'Dips': '3x12',
        'Extensions triceps à la poulie': '4x12'
      }
    },
    Mardi: {
      muscularGroup: 'Dos / Biceps',
      exercice: {
        'Tractions': '4x8',
        'Rowing barre': '4x10',
        'Curl barre': '4x10',
        'Curl haltère incliné': '3x12'
      }
    },
    Mercredi: {
      muscularGroup: 'Jambes',
      exercice: {
        'Squat': '4x8',
        'Soulevé de terre jambes tendues': '4x10',
        'Fentes': '3x12',
        'Presse à cuisses': '4x10'
      }
    },
    Jeudi: {
      muscularGroup: 'Épaules / Trapèzes',
      exercice: {
        'Développé militaire': '4x8',
        'Élévations latérales': '4x12',
        'Oiseau': '4x12',
        'Shrugs': '4x15'
      }
    },
    Vendredi: {
      muscularGroup: 'Full Body léger / Core',
      exercice: {
        'Pompes': '4x20',
        'Crunchs': '4x30',
        'Gainage': '3x1min',
        'Mountain climbers': '4x40s'
      }
    },
    Samedi: {
      muscularGroup: 'Cardio / Mobilité',
      exercice: {
        'Course': '30 min',
        'Jump rope': '4x2min',
        'Étirements dynamiques': '20 min',
        'Foam rolling': '10 min'
      }
    },
    Dimanche: {
      muscularGroup: 'Repos actif',
      exercice: {
        'Marche': '1h',
        'Étirements légers': '15 min'
      }
    }
  };

  
  return (
    <div className="App">
      <header className="App-header">
        {
          item==='menu' && 
          Object.keys(Week).map((day)=> (
            <div className='week' onClick={() => setItem(day)}>{day}</div>
          ))
        }
        {
          item!== 'menu' && 
          <>
          {Object.entries(Week).filter(([day]) => day === item).map(([jour, details]) => (
            <table key={jour}>
              <title>{jour} | {details?.muscularGroup}</title>
                <th>Exercice</th>
                <th>Répétition</th>
                <tbody>
                  {Object.entries(details?.exercice || []).map(([exo, rep]) => (
                    <tr key={exo}>
                      <td>{exo}</td>
                      <td>{rep}</td>
                    </tr>
                  ))}
                </tbody>
            </table>
          ))}
          <button onClick={() => {setItem('menu')}}>Menu</button>
          </>
          
        }
      </header>
    </div>
  );
}

export default App;
