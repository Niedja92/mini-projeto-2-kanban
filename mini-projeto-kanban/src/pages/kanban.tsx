import { useEffect, useState } from "react";
import { Container, Column, NewTask } from '../assets/global-style'
import { getAllCards } from "../services/card-service";
import { toast } from "react-toastify";
import Cards from "../components/Cards/Cards";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight, faPlus } from '@fortawesome/free-solid-svg-icons'

export default function Kanban() {
    const [cards, setCards] = useState<Card[]>([])

    useEffect(() => {
        getAllCards()
            .then(setCards)
            .catch(e => {
                if (e instanceof Error) {
                    toast.error(e.message)
                }
            })
    }, [])

    return (
        <Container>
            <Column>
                <h1>New</h1>
                <NewTask>
                    <div>
                        <input placeholder="Título" />
                    </div>
                    <div>
                        <textarea placeholder="Conteúdo" />
                    </div>

                    <button><FontAwesomeIcon icon={faPlus} /></button>
                </NewTask>
            </Column>

            <Cards title="To Do" cards={cards.filter(card => card.column === 'TODO')} setCards=<FontAwesomeIcon icon={faArrowAltCircleRight}></FontAwesomeIcon> />
            <Cards title="Doing" cards={cards.filter(card => card.column === 'DOING')} setCards={setCards} />
            <Cards title="Done" cards={cards.filter(card => card.column === 'DONE')} setCards={setCards} />

        </Container>
    )
}
