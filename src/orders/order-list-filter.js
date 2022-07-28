import { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    Box,
    Checkbox,
    Drawer,
    FormControlLabel,
    FormGroup,
    IconButton,
    InputAdornment,
    Stack,
    Switch,
    TextField,
    Typography,
    Select,
    MenuItem,
    useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Search as SearchIcon } from '../icons/search';
import { X } from '../icons/x';
import { Scrollbar } from '../misc/scrollbar';
import { getCountriesAll, getProvincesByName } from '../utils/get-locales';

const FiltersDrawerDesktop = styled(Drawer)({
    flexShrink: 0,
    width: 380,
    '& .MuiDrawer-paper': {
        position: 'relative',
        width: 380
    }
});

const FiltersDrawerMobile = styled(Drawer)({
    maxWidth: '100%',
    width: 380,
    '& .MuiDrawer-paper': {
        height: 'calc(100% - 64px)',
        maxWidth: '100%',
        top: 64,
        width: 380
    }
});

export const WarehouseListFilters = (props) => {
    const { containerRef, filters = {}, onChange, onClose, open, providers, ...other } = props;
    const queryRef = useRef(null);
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const countries = getCountriesAll();
    const [provinces, setProvinces] = useState([]);
    const timeout = 0

    const handleQueryChange = (event) => {
        event.preventDefault();
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            onChange?.({
                ...filters,
                query: queryRef.current?.value
            });
        }, 800);


    };

    const handleProviderChange = (event) => {
        if (event.target.checked) {
            onChange?.({
                ...filters,
                providers: [...filters.providers, event.target.value]
            });
        } else {
            onChange?.({
                ...filters,
                providers: filters.providers.filter((provider) => provider !== event.target.value)
            });
        }
    };

    const handleActiveChange = (event) => {
        onChange?.({
            ...filters,
            active: event.target.checked ? true : false
        });
    };

    const handleAllocationsChange = (event) => {
        onChange?.({
            ...filters,
            respect_allocations: event.target.checked ? true : false
        });
    };

    const handlePhysicalChange = (event) => {
        onChange?.({
            ...filters,
            physical: event.target.checked ? true : false
        });
    };

    const handleCountryChange = (event) => {
        onChange?.({
            ...filters,
            country: event.target.value
        });
        setProvinces(getProvincesByName(event.target.value?.id))
    };

    const handleProvinceChange = (event) => {
        onChange?.({
            ...filters,
            state: event.target.value
        });
    };

    const handleInventoryTrackingChange = (event) => {
        onChange?.({
            ...filters,
            inventory_tracking: event.target.value
        });
    };

    const content = (
        <Box
            sx={{
                pb: 3,
                pt: {
                    xs: 3,
                    lg: 8
                },
                px: 3
            }}
        >
            <Box
                sx={{
                    display: {
                        lg: 'none'
                    },
                    mb: 2
                }}
            >
                <IconButton onClick={onClose}>
                    <X fontSize="small" />
                </IconButton>
            </Box>
            <Box
                component="form"
                onChange={handleQueryChange}
            >
                <TextField
                    defaultValue=""
                    fullWidth
                    inputProps={{ ref: queryRef }}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon fontSize="small" />
                            </InputAdornment>
                        )
                    }}
                    label="Search"
                    placeholder="Search by warehouse name"
                />
            </Box>
            <Typography
                color="textSecondary"
                sx={{ mt: 3 }}
                variant="subtitle2"
            >
                Country / State
            </Typography>
            <Stack
                spacing={2}
                sx={{ mt: 2 }}
            >
                <Select defaultValue='none' onChange={handleCountryChange}>
                    <MenuItem value="none" disabled>Select country</MenuItem>
                    {countries.map(country => (
                        <MenuItem value={country.id} key={country.id}>{country.name}</MenuItem>
                    ))}
                </Select>
                <Select defaultValue='none' onChange={handleProvinceChange}>
                    <MenuItem value="none" disabled>Select state</MenuItem>
                    {provinces.map(province => (
                        <MenuItem value={province.name} key={province.name}>{province.name}</MenuItem>
                    ))}
                </Select>
            </Stack>
            <Typography
                color="textSecondary"
                sx={{ mt: 3 }}
                variant="subtitle2"
            >
                Inventory Tracking
            </Typography>
            <Stack
                spacing={2}
                sx={{ mt: 2 }}
            >
                <TextField label="Inventory Tracking" select value={filters.inventory_tracking} onChange={handleInventoryTrackingChange}>
                    <MenuItem value="basic">Basic</MenuItem>
                </TextField>
            </Stack>
            <Typography
                color="textSecondary"
                sx={{ mt: 3 }}
                variant="subtitle2"
            >
                From Provider
            </Typography>
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    borderColor: 'divider',
                    borderRadius: 1,
                    borderStyle: 'solid',
                    borderWidth: 1,
                    mt: 2
                }}
            >
                <Scrollbar sx={{ maxHeight: 200 }}>
                    <FormGroup
                        sx={{
                            py: 1,
                            px: 1.5
                        }}
                    >
                        {providers.map((provider) => {
                            return (
                                <FormControlLabel
                                    control={<Checkbox checked={filters.providers?.includes(provider.id.toString())} />}
                                    onChange={handleProviderChange}
                                    key={provider.id}
                                    label={provider.name}
                                    value={provider.id}
                                />
                            )
                        })}
                    </FormGroup>
                </Scrollbar>
            </Box>
            <FormControlLabel
                control={<Switch checked={filters.active} />}
                label="Show active only"
                onChange={handleActiveChange}
                sx={{ mt: 2 }}
            />
            <FormControlLabel
                control={<Switch checked={filters.physical} />}
                label="Show physical only"
                onChange={handlePhysicalChange}
                sx={{ mt: 2 }}
            />
            <FormControlLabel
                control={<Switch checked={filters.respect_allocations} />}
                label="Respect allocations"
                onChange={handleAllocationsChange}
                sx={{ mt: 2 }}
            />
        </Box>
    );

    if (lgUp) {
        return (
            <FiltersDrawerDesktop
                anchor="left"
                open={open}
                SlideProps={{ container: containerRef?.current }}
                variant="persistent"
                {...other}>
                {content}
            </FiltersDrawerDesktop>
        );
    }

    return (
        <FiltersDrawerMobile
            anchor="left"
            ModalProps={{ container: containerRef?.current }}
            onClose={onClose}
            open={open}
            SlideProps={{ container: containerRef?.current }}
            variant="temporary"
            {...other}>
            {content}
        </FiltersDrawerMobile>
    );
};

WarehouseListFilters.propTypes = {
    containerRef: PropTypes.any,
    filters: PropTypes.object,
    onChange: PropTypes.func,
    onClose: PropTypes.func,
    open: PropTypes.bool
};
