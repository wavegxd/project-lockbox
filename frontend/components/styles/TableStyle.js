import styled from 'styled-components';

const TableStyle = styled.div`
  .table-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  table {
    width: 800px;
    border-collapse: collapse;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  }

  th,
  td {
    padding: 15px;
  }

  th {
    text-align: left;
  }

  thead {
    th {
      background-color: #f9faf5;
    }
  }

  tbody {
    tr {
      &:hover {
        background-color: rgba(111, 119, 239, 0.3);
      }
    }
    td {
      position: relative;
      &:hover {
        &:before {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          top: -9999px;
          bottom: -9999px;
          background-color: rgba(111, 119, 239, 0.2);
          z-index: -1;
        }
      }
    }
  }
`;

export default TableStyle;
