import React, { useState } from 'react';
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, IconButton, Checkbox, Typography, Button, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ListAltIcon from '@mui/icons-material/ListAlt';
import LogoutIcon from '@mui/icons-material/Logout';

const Tasks = () => {
  const mockData = [
    { id: 1, nome: 'Tarefa 1', data: '2025-01-01' },
    { id: 2, nome: 'Tarefa 2', data: '2025-01-02' },
    { id: 3, nome: 'Tarefa 3', data: '2025-01-03' },
    { id: 4, nome: 'Tarefa 4', data: '2025-01-04' },
    { id: 5, nome: 'Tarefa 5', data: '2025-01-05' },
    { id: 6, nome: 'Tarefa 6', data: '2025-01-06' },
    { id: 7, nome: 'Tarefa 7', data: '2025-01-07' },
    { id: 8, nome: 'Tarefa 8', data: '2025-01-08' },
    { id: 9, nome: 'Tarefa 9', data: '2025-01-09' },
    { id: 10, nome: 'Tarefa 10', data: '2025-01-10' },
  ];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEdit = (id) => {
    console.log(`Editar tarefa com id: ${id}`);
  };

  const handleDelete = (id) => {
    console.log(`Excluir tarefa com id: ${id}`);
  };

  const handleCreate = () => {
    console.log('Abrir modal para criar tarefa');
  };

  const handleLogout = () => {
    console.log('Redirecionar para tela de login');
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh', backgroundColor: '#1a1a1b' }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 240,
            boxSizing: 'border-box',
            backgroundColor: '#292929',
            color: 'white',
          },
        }}
      >
        <Typography
          variant="h5"
          sx={{
            padding: 2,
            textAlign: 'left',
            fontFamily: 'Playfair Display, serif',
            color: 'white',
          }}
        >
          OrganizaMe
        </Typography>
        <List>
          <ListItem button>
            <ListItemIcon>
              <ListAltIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Tasks" />
          </ListItem>
          <ListItem button onClick={handleLogout}>
            <ListItemIcon>
              <LogoutIcon sx={{ color: 'white' }} />
            </ListItemIcon>
            <ListItemText primary="Log-out" />
          </ListItem>
        </List>
      </Drawer>

      <Box
        sx={{
          flexGrow: 1,
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: 1400,
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 3,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                textAlign: 'left',
                color: 'white',
              }}
            >
              📝 To-Do List
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleCreate}
              sx={{
                backgroundColor: '#3f51b5',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#303f9f',
                },
              }}
            >
              + Create
            </Button>
          </Box>
          <TableContainer
            sx={{
              backgroundColor: '#292929',
              borderRadius: '8px',
              boxShadow: 2,
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell sx={{ color: 'white' }}></TableCell>
                  <TableCell sx={{ color: 'white' }}>Name</TableCell>
                  <TableCell sx={{ color: 'white' }}>Date</TableCell>
                  <TableCell sx={{ color: 'white' }}>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {mockData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((task) => (
                    <TableRow key={task.id}>
                      <TableCell>
                        <Checkbox sx={{ color: 'white' }} />
                      </TableCell>
                      <TableCell sx={{ color: 'white' }}>{task.nome}</TableCell>
                      <TableCell sx={{ color: 'white' }}>{task.data}</TableCell>
                      <TableCell>
                        <IconButton
                          onClick={() => handleEdit(task.id)}
                          color="primary"
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton
                          onClick={() => handleDelete(task.id)}
                          color="secondary"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
            <TablePagination
              sx={{ color: 'white' }}
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={mockData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
};

export default Tasks;