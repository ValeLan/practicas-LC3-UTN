import PropTypes from 'prop-types';

const Table = ({ netIncomes }) => {
    let promedioIncomes = netIncomes.reduce((acc, item)=> acc + item.income, 0);
    let promedio = promedioIncomes/ netIncomes.length;
    return (
        <div>
            <table>
                <thead>
                    <th>Marca</th>
                    <th>Ingreso Neto</th>
                </thead>
                <tbody>
                    {netIncomes.map((val, i) => (
                        <tr key={i}>
                            <td>{val.brand}</td>
                            <td>{val.income}</td>
                        </tr>
                    ))}

                </tbody>
            </table>
            <p>
                Su promedio de ingresos netos es: {promedio.toFixed(2)}
            </p>
        </div>
    )
}

Table.propTypes={
    netIncomes:PropTypes.array,
}
export default Table
