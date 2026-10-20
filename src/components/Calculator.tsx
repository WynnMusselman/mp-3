

export default function Calculator() {
    return(
        <>
            <div class = "info-section">
                <h3>My Calculator</h3>
                <p>September 2026</p>

                <div class = "two-col">
                    <!--input boxes-->
                    <div class = "inner-col">
                        <label for = "first">first Number:</label><input id = "first" placeholder="first number">
                        <label for = "second">Second Number:</label><input id = "second" placeholder="second number">
                    </div>
                    <div class = "inner-col">
                        <!--operations-->
                        <div class = "two-col">
                            <div class = "inner-col">
                                <button onclick = "doAdd()">+</button>
                                <button onclick = "doSub()">-</button>
                                <button onclick = "doMul()">*</button>
                            </div>
                            <div class = "inner-col">
                                <button onclick = "doDiv()">/</button>
                                <button onclick = "doPow()">^</button>
                                <button onclick = "doClear()">clear</button>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 id = "output"></h3>
            </div>


        </>
    )
}