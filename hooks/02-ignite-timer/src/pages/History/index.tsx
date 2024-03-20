import { useContext } from "react";
import { formatDistanceToNow } from 'date-fns';
import { HistoryContainer, HistoryList, Status } from "./styles";
import ptBR from 'date-fns/locale/pt-BR';
import { CyclesContext } from "../../contexts/CyclesContext";

export function History(){
    const { cycles } = useContext(CyclesContext);

    return (
        <HistoryContainer>
            <h1>Meu histórico</h1>
            
            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <td>Tarefa</td>
                            <td>Duração</td>
                            <td>Início</td>
                            <td>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {cycles.map((cycle) => {
                            return (
                                <tr key={cycle.id}>
                                    <td>{cycle.task}</td>
                                    <td>{cycle.minutesAmount} minutos</td>
                                    <td>{formatDistanceToNow(new Date(cycle.startDate), {
                                        addSuffix: true,
                                        locale: ptBR,
                                    })}</td>
                                    <td>
                                        { cycle.finishedDate && 
                                            <Status statusColor="green">
                                                Concluído
                                            </Status>
                                        }
                                        { cycle.interruptedDate && 
                                            <Status statusColor="red">
                                                Interrompido
                                            </Status>
                                        }
                                        { (!cycle.finishedDate && !cycle.interruptedDate) && 
                                            <Status statusColor="yellow">
                                                Em andamento
                                            </Status>
                                        }
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>
    )
}