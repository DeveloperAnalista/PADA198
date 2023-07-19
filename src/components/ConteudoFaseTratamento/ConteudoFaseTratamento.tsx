import {
  FaseContentContainer,
  DuracaoTratamento,
  PeriodicidadeTratamento,
  DivTitle,
  DosagemMedicamento,
  Inativa,
} from "./ConteudoFaseTratamento.styles";
import TextInput from "../TextInput/TextInput";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import Button from "../Button/Button";

const ConteudoFaseTratamento = () => {
  return (
    <form>
      <FaseContentContainer>
        <h2>Fase 1</h2>
        <DuracaoTratamento>
          <h3>Duração do Tratamento</h3>
          <p>Início</p>
          <TextInput name="inicio" type="date" style={{ width: "12em" }} />
          <p>Fim</p>
          <TextInput name="fim" type="date" style={{ width: "12em" }} />
        </DuracaoTratamento>
        <PeriodicidadeTratamento>
          <DivTitle>
            <h3>Periodicidade do Tratamento</h3>
          </DivTitle>
          <label>
            <input type="checkbox" name="sete-dias" className="checkbox" />A
            cada 7 dias
          </label>
          <label>
            <input type="checkbox" name="tres-semanas" className="checkbox" />A
            cada 3 semanas
          </label>
          <label>
            <input type="checkbox" name="duas-semanas" className="checkbox" />A
            cada 2 semanas
          </label>
          <label>
            <input type="checkbox" name="quatro-semanas" className="checkbox" />
            A cada 4 semanas
          </label>
        </PeriodicidadeTratamento>
        <DosagemMedicamento>
          <DivTitle>
            <h3>Dosagem do Medicamento</h3>
          </DivTitle>
          <label>
            <input type="checkbox" name="quatro-semanas" className="checkbox" />
            1:10.000
          </label>
          <label>
            <input type="checkbox" name="quatro-semanas" className="checkbox" />
            1:100
          </label>
          <label>
            <input type="checkbox" name="quatro-semanas" className="checkbox" />
            1:1.000
          </label>
          <label>
            <input type="checkbox" name="quatro-semanas" className="checkbox" />
            1:10
          </label>
        </DosagemMedicamento>
        <Inativa>
          <h3>Inativa</h3>
          <ToggleSwitch />
        </Inativa>
        <Button color="primary" title="salvar" style={{ width: "8em" }}>
          Salvar
        </Button>
      </FaseContentContainer>
    </form>
  );
};

export default ConteudoFaseTratamento;
