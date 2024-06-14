import React from 'react'
import styles from './styles.module.css'
const MeassureCard = () => {
    return (
        <div className={ styles.main }>
            <h2 className={ styles.title } >Impact Measurement</h2>
            <div>
                <table className={ "table w-100 " + styles.tableQuestion }>
                    <thead>
                        <tr>
                            <th className={ styles.tableHeader } scope="col">Question</th>
                            <th className={ styles.tableHeader } scope="col">T0</th>
                            <th className={ styles.tableHeader } scope="col">T1</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                1. Ik versta goed nederlands
                            </td>
                            <td>5</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>
                                2. Ik spreek goed nederlands
                            </td>
                            <td>5</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>
                                3. Ik durf nederlands te spreken met nederlandse mensen
                            </td>
                            <td>5</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>
                                4. Ik voel me goed omdat ik nederlands spreek
                            </td>
                            <td>5</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>
                                5. Ik durf nieuwe dingen buitenshuis te doen omdat ik nederlands spreek
                            </td>
                            <td>5</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>
                                6. Ik ben actief buitenshuis (bibliotheek, sport, bioscoop, winkelen, reizen met openbaar vervoer)
                            </td>
                            <td>5</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>
                                7. Ik doe mee aan activiteiten in de buurt (straatfeest, koffie-ochtend, buurthuis)
                            </td>
                            <td>5</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>
                                8. Ik heb vrijwilligerswerk
                            </td>
                            <td>5</td>
                            <td>6</td>
                        </tr>




                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MeassureCard