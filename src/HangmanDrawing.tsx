const HEAD = (
    <div
        style={{
            height: "17.5%",
            maxHeight: "87.5px",
            width: "28%",
            maxWidth: "256px",
            borderRadius: "100%",
            backgroundColor: "blue",
            position: "absolute",
            top: "12.5%",
            right: "36%"
        }}
    />
)

const BODY = (
    <div
        style={{
            height: "25%",
            width: "5%",
            background: "blue",
            position: "absolute",
            top: "30%",
            left: "47.5%"
        }}
    />
)

const LEFT_ARM = (
    <div
        style={{
            height: "2.5%",
            width: "40%",
            background: "blue",
            position: "absolute",
            top: "37.5%",
            left: "8%",
            rotate: "30deg",
            transformOrigin: "right bottom"            
        }}
    />
)

const RIGHT_ARM = (
    <div
        style={{
            height: "2.5%",
            width: "40%",
            background: "blue",
            position: "absolute",
            top: "37.5%",
            right: "8%",
            rotate: "-30deg",
            transformOrigin: "left bottom"            
        }}
    />
)

const LEFT_LEG = (
    <div
        style={{
            height: "2.5%",
            width: "40%",
            background: "blue",
            position: "absolute",
            top: "54%",
            left: "8%",
            rotate: "-60deg",
            transformOrigin: "right top"            
        }}
    />
)

const RIGHT_LEG = (
    <div
        style={{
            height: "2.5%",
            width: "40%",
            background: "blue",
            position: "absolute",
            top: "54%",
            right: "8%",
            rotate: "60deg",
            transformOrigin: "left top"            
        }}
    />
)

const BODY_PARTS = [HEAD, BODY, LEFT_ARM, RIGHT_ARM, LEFT_LEG, RIGHT_LEG]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing({ numberOfGuesses}: HangmanDrawingProps) {
    return (
        <div style={{ height: "50vw", maxHeight: "400px", margin: "0", position: "relative" }}>
            <div style={{ height: "12.5%", width: "4%", background: "gold", position: "absolute", top: "0%", left: "48%"}} />
            <div style={{ height: "3%", width: "100%", background: "brown"}} />
            <div style={{ height: "100%", width: "4%", background: "brown", position: "absolute", top: 0, left: 0}} />
            <div style={{ height: "100%", width: "4%", background: "brown", position: "absolute", top: 0, right: 0}} />
            {BODY_PARTS.slice(0, numberOfGuesses)}
        </div>
    )
}
