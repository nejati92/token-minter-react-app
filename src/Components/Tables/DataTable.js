import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import ReactTooltip from "react-tooltip";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

class DataTable extends Component {
  render() {
    return (
      <TableContainer component={Paper}>
          <Table aria-label="simple table">
              <TableHead>
                  <TableRow>
                      <TableCell align="left">Token Id&nbsp;</TableCell>
                      <TableCell align="left">Transaction hash&nbsp;</TableCell>
                      <TableCell align="left">Transaction link&nbsp;</TableCell>
                      <TableCell align="left">Token Avatar&nbsp;</TableCell>
                      <TableCell align="left">Token Owner&nbsp;</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  {this.props.items.map(item => (
                  <TableRow>
                      <TableCell component="th" scope="row">
                          {item.id}
                      </TableCell>
                      <TableCell component="th" scope="row">
                          <p data-tip="Copy to clipboard">
                              {`${item.hash.substring(0, 4)}**${item.hash.substring( item.hash.length - 4, item.hash.length )}`}
                              <CopyToClipboard text={item.hash} onCopy={this.onCopy}>
                                  <Button>
                                      <img src={ "./clipboard.png"} style={{ height: "19px", width: "15px", background: "transparent" }} />
                                  </Button>
                              </CopyToClipboard>
                          </p>
      
                          <ReactTooltip />
                      </TableCell>
                      <TableCell align="left">
                          <a href={item.link} target="_blank">
                          Tx Link
                        </a>
                      </TableCell>
                      <TableCell align="left">
                          <img src={item.avatar} style={{ height: "50px", width: "50px" }} />
                      </TableCell>
                      <TableCell align="left">
                          <p data-tip="Copy to clipboard">
                              {`${item.owner.substring(0, 4)}**${item.owner.substring( 40, 42 )}`}
                              <CopyToClipboard text={item.owner} onCopy={this.onCopy}>
                                  <Button style={ {outline:"none"}}>
                                      <img src={ "./clipboard.png"} style={{height: "19px", width: "15px", background: "transparent" }} />
                                  </Button>
                              </CopyToClipboard>
                          </p>
                      </TableCell>
                  </TableRow>
                  ))}
              </TableBody>
          </Table>
      </TableContainer>
      );
  }
}

export default DataTable