import { useEffect, useState } from "react";
import { Container, Column } from '../assets/global-style'
import { getAllCards } from "../services/card-service";
import { toast } from "react-toastify";
import Cards from "../components/Cards/Cards";

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
                NEW
                COLUNA FIXA
                CRIAR O CARD
            </Column>

            <Cards title="TO DO" cards={cards.filter(card => card.column === 'TODO')} setCards={setCards} />
            <Cards title="DOING" cards={cards.filter(card => card.column === 'DOING')} setCards={setCards} />
            <Cards title="DONE" cards={cards.filter(card => card.column === 'DONE')} setCards={setCards} />

        </Container>
    )
}
