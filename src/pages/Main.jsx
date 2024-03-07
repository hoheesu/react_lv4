// Main.jsx
import React, { useState, useEffect } from "react";
import withAuth from "../HOC/withAuth";

function Main() {
  return (
    <div>
      <p>메인페이지</p>
    </div>
  );
}

export default withAuth(Main, false);
