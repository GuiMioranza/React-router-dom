import { useEffect, useMemo, useRef, useState } from 'react';
import Menu from '../../Components/Menu';
import './styles.css';

type UserProfileProps = {
  name: string;
  bio: string;
  followers: number;
  following: number;
}

interface RepositoryProps {
  id: number;
  name: string;
}

