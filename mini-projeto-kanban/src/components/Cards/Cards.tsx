import { Dispatch, SetStateAction } from "react"
import { Box, Column } from "../../assets/global-style"
import { updateCardService } from "../../services/card-service"

type Props = {
    title: string
    cards: Card[]
    setCards: Dispatch<SetStateAction<Card[]>>
}

export default function Cards({ title, cards, setCards }: Props) {

    const updateCard = async (card: Card, position: 'left' | 'right') => {
        let column = card.column

        if (['TODO', 'DONE'].includes(column)) {
            column = 'DOING'
        } else if (position === 'left') {
            column = 'TODO'
        } else {
            column = 'DONE'
        }

        const response = await updateCardService({
            ...card,
            column
        })

        setCards(response)
    }

    const moveToLeft = (card: Card) => {
        updateCard(card, 'left')
    }

    const moveToRight = (card: Card) => {
        updateCard(card, 'right')
    }

    return (
        <Column>
            <h1>{title}</h1>

            <div>
                {cards.map(card => (
                    <Box key={card._id}>
                        <h3>{card.title} - {card.column}</h3>
                        <div>{card.content}</div>
                        <div>
                            {card.column !== 'TODO' && <button onClick={() => moveToLeft(card)}>&lt;</button>}
                            {card.column !== 'DONE' && <button onClick={() => moveToRight(card)}>&gt;</button>}
                        </div>
                    </Box>
                ))}
            </div>
        </Column>
    )
}

