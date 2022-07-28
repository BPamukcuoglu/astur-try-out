import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Divider,
  Link,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@mui/material';
import WarehouseIcon from '@mui/icons-material/Warehouse';


const data = [
  {
    id: 1,
    name: "Amazon FBA",
    stock: 123
  },
  {
    id: 2,
    name: "Not Amazon FBA",
    stock: 2781
  },
  {
    id: 3,
    name: "A Warehouse with Cool Name",
    stock: 4567
  },
  {
    id: 4,
    name: "Future Warehouse",
    stock: 6572
  },

]

function stringToColor(string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}


export const ProductWarehouses = () => (
  <Card sx={{ height: "100%" }}>
    <CardHeader
      title="Warehouses"
      avatar={<WarehouseIcon />}
    />
    <Divider />
    <Divider />
    <Box sx={{ display: 'flex', p:0 }}>
      <Box
        sx={{
          p: 3,
          flexGrow: 1,
          '&:first-of-type': {
            borderRight: (theme) => `1px solid ${theme.palette.divider}`
          }
        }}
      >
        <Typography
          align="center"
          color="textPrimary"
          variant="h5"
        >
          4
        </Typography>
        <Typography
          align="center"
          color="textSecondary"
          component="h4"
          variant="overline"
        >
          Warehouses
        </Typography>
      </Box>
      <Box
        sx={{
          p: 3,
          flexGrow: 1,
          '&:first-of-type': {
            borderRight: (theme) => `1px solid ${theme.palette.divider}`
          }
        }}
      >
        <Typography
          align="center"
          variant="h5"
        >
          12851
        </Typography>
        <Typography
          align="center"
          color="textSecondary"
          component="h4"
          variant="overline"
        >
          In Stock
        </Typography>
      </Box>
    </Box>
    <Divider />
    <List disablePadding>
      {data.map((dat, i) => (
        <ListItem
          divider={i < data.length - 1}
          key={dat.id}
        >
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: stringToColor(dat.name) }} >{dat.name.toString().substring(0, 1).toUpperCase()}</Avatar>
          </ListItemAvatar>
          <ListItemText
            disableTypography
            primary={(
              <Link
                color="textPrimary"
                sx={{ cursor: 'pointer' }}
                underline="none"
                variant="subtitle2"
              >
                {dat.name}
              </Link>
            )}
            secondary={(
              <Typography
                color="textSecondary"
                variant="body2"
              >
                {dat.namr}
              </Typography>
            )}
          />
          <Typography
            color={dat.stock < 200 ? "error" : "textSecondary"}
            noWrap
            variant="subtitle2"
          >
            {dat.stock}
            {' '}
            pieces left
          </Typography>
        </ListItem>
      ))}
    </List>
  </Card>
);
