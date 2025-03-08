import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Results.module.css";
import myImage from "../assets/myimage.png";

function Results() {
  return (
    <main className={styles.main}>
      <img src={myImage} alt="Example" />
      <div className={styles.title}>Results</div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Course / Semester</th>
            <th>Session</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>5th Semester Regular</td>
            <td>Winter 2024</td>
            <td>
              <Link to="/results_5th_semester_regular" className={styles.link}>View Result</Link>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>3rd Semester Regular</td>
            <td>Winter 2024</td>
            <td>
              <Link className={styles.link}>View Result</Link>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>1st Semester Regular</td>
            <td>Winter 2024</td>
            <td>
              <Link className={styles.link}>View Result</Link>
            </td>
          </tr>
        </tbody>
      </table>
    </main>
  );
}

export default Results;
