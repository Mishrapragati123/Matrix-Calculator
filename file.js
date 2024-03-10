javascript
function createMatrix(matrixName) {
    const rows = parseInt(document.getElementById(`rows${matrixName}`).value);
    const cols = parseInt(document.getElementById(`cols${matrixName}`).value);

    const matrixContainer = document.getElementById(`matrix${matrixName}`);
    matrixContainer.innerHTML = "";

    for (let i = 0; i < rows; i++) {
        const row = document.createElement("div");
        row.className = "matrix-row";
        for (let j = 0; j < cols; j++) {
            const input = document.createElement("input");
            input.type = "number";
            input.className = "matrix-input";
            row.appendChild(input);
        }
        matrixContainer.appendChild(row);
    }
}

function calculate() {
    const matrixA = getMatrixValues("A");
    const matrixB = getMatrixValues("B");

    if (!matrixA || !matrixB) {
        alert("Please create both matrices first.");
        return;
    }

    if (matrixA.length !== matrixB.length || matrixA[0].length !== matrixB[0].length) {
        alert("Matrices must have the same dimensions.");
        return;
    }

    const result = addMatrices(matrixA, matrixB);
    displayResult(result);
}

function getMatrixValues(matrixName) {
    const matrixContainer = document.getElementById(`matrix${matrixName}`);
    const rows = matrixContainer.children;
    const matrix = [];

    for (let i = 0; i < rows.length; i++) {
        const row = rows[i];
        const cols = row.children;
        const rowData = [];

        for (let j = 0; j < cols.length; j++) {
            rowData.push(parseInt(cols[j].value));
        }

        matrix.push(rowData);
    }

    return matrix;
}

function addMatrices(matrixA, matrixB) {
    const result = [];

    for (let i = 0; i < matrixA.length; i++) {
        const newRow = [];
        for (let j = 0; j < matrixA[i].length; j++) {
            newRow.push(matrixA[i][j] + matrixB[i][j]);
        }
        result.push(newRow);
    }

    return result;
}

function displayResult(resultMatrix) {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "<h2>Result Matrix</h2>";

    for (let i = 0; i < resultMatrix.length; i++) {
        const row = resultMatrix[i];
        const rowDiv = document.createElement("div");
        rowDiv.className = "result-row";
        for (let j = 0; j < row.length; j++) {
            const cell = document.createElement("span");
            cell.className = "result-cell";
            cell.textContent = row[j];
            rowDiv.appendChild(cell);
        }
        resultContainer.appendChild(rowDiv);
    }
}