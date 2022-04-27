import { useState } from 'react';
import styles from './assets/App.module.css';
import powedImage from './assets/powered.png'
import { calculateImc, levels} from './assets/helpers/Imc'
import { GridItem} from './Components/GridItem'

function App() {

  const [heightField, setHeightField] = useState(0);
  const [wheightField, setWeightField] = useState(0);

  const HandleCalc = () => {
     if(heightField && wheightField){

     }else{
       alert('preencha todos os campos!')
     }
  }
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
            <img src={powedImage} alt="logo" width={150}/>
        </div>
      </header>
      <div className={styles.container}>
        <div className={styles.leftside}>
          <h1>Calcule seu IMC</h1>
          <p>IMC é a sigla para índice de massa corpórea, parâmetro adotado pela Organização Mundial de Saúde para calcular o peso ideal de cada pessoa.</p>
          <input type="number" 
            value={heightField > 0 ? heightField : ''}
            placeholder="Digite sua altura, Ex 1.5 (em metros)"
            onChange={e => setHeightField(parseFloat(e.target.value))}
          />
          <input type="number" 
            value={wheightField > 0 ?wheightField : ''}
            placeholder="Digite seu peso, Ex 75.3 (em kg)"
            onChange={e => setWeightField(parseFloat(e.target.value))}
          />
          <button onClick={HandleCalc}>Calcular</button>
        </div>
        <div className={styles.rightside}>
          <div className={styles.grid}>
            {levels.map((item, key)=>(
              <GridItem  key={key} item={item}/>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
